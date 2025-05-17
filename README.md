# ipinfo

A simple Node.js service to get detailed information about IP addresses, including geolocation data.

## Features

- Get IP address information
- Geolocation data (city, region, country)
- Timezone information
- Coordinates (latitude/longitude)
- Cross-origin support (CORS enabled)
- Input validation
- Error handling

## Installation

1. Clone the repository:

```bash
git clone https://github.com/prabhasha2006/ipinfo.git
cd ipinfo
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory:

```plaintext
PORT=3000
```

## Usage Example

```javascript
// Using Fetch API
fetch('http://localhost:3000/ipinfo')
  .then(response => response.json())
  .then(data => {
    console.log('Your IP:', data.ip);
    console.log('Location:', data.city, data.region, data.country);
    console.log('Timezone:', data.timezone);
    console.log('Coordinates:', data.loc);
  })
  .catch(error => console.error('Error:', error));
```

## Response Format

```javascript
{
  "ip": "192.168.1.1",
  "city": "New York",
  "region": "NY",
  "country": "US",
  "loc": [40.7128, -74.0060],
  "timezone": "America/New_York"
}
```

## API Endpoints

### GET /ipinfo
Returns information about the requester's IP address.

### GET /health
Health check endpoint to verify service status.

## Dependencies

- express
- geoip-lite
- request-ip
- cors
- morgan
- dotenv

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.