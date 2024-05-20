import psycopg2
from psycopg2 import sql
import random

# Connect to your PostgreSQL database
conn = psycopg2.connect(
    dbname="postgres",
    user="postgres",
    password="password",
    host="localhost",
    port="5431"
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Define the number of rows you want to generate

def generate_price(type_):
    # Define the maximum price
    max_price = 20000000
    
    # Define the price ranges and their corresponding percentages
    if type_ == 'arrendar':
        price_ranges = [(0, 5000) , (5001,10000),(10001,50000)]
        percentages = [0.99, 0.05, 0.05]
    else:
        price_ranges = [(0, 50000), (50001, 100000), (100001, 2000000)]
        percentages = [0.83, 0.11, 0.06]
    
    # Choose a price range based on the defined percentages
    price_range = random.choices(price_ranges, weights=percentages)[0]
    
    # Generate a random price within the selected price range
    price = random.randint(price_range[0], price_range[1])
    
    return round(price, 2)

# Assuming you have the rest of the code from your example...
num_rows = 200
# Your code with price generation logic included
for i in range(num_rows):
    # Choose a random type
    type_ = random.choices(['venda', 'arrendar'], weights=[0.95, 0.05])[0]
    
    district = "Porto"
    municipality = "Porto"
    
    # Generate a random coordinate within the specified square
    min_lat, max_lat = 41.148535, 41.170542
    min_lng, max_lng = -8.639319, -8.581868
    latitude = round(random.uniform(min_lat, max_lat), 6)
    longitude = round(random.uniform(min_lng, max_lng), 6)

    name = f"Product {i + 1}"
    price = generate_price(type_)  # Using the generate_price function to get the price and change percentage
    location = district+", "+municipality
    coordinates = f"({latitude}, {longitude})"

    # Construct the SQL query
    query = sql.SQL("INSERT INTO RealEstateData (name, price, type, location, coordinates) VALUES (%s, %s, %s, %s, %s)").format(
        sql.Identifier("RealEstateData")
    )

    # Execute the SQL query with the data
    cur.execute(query, (name, price, type_, location, coordinates))

# Commit the transaction
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()
