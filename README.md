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
    console.log(data);
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
  "continent": "NA",
  "loc": [40.7128, -74.0060],
  "timezone": "America/New_York",
  "metro": 501,
  "area": 5,
  "eu": "No",
  "network": {
    "type": "IPv4",
    "range": ["192.168.1.0", "192.168.1.255"],
    "proxy": false,
    "userAgent": "Mozilla/5.0..."
  },
  "isp": {
    "name": "Comcast Cable Communications",
    "asn": "AS7922",
    "connection": "broadband",
    "domain": "comcast.net"
  },
  "timestamp": "2023-11-15T12:00:00.000Z"
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