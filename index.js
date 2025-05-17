const express = require('express')
const geoip = require('geoip-lite')
const requestIp = require('request-ip')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(morgan('combined'))
app.use(requestIp.mw())

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

// IP validation helper
const isValidIP = (ip) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
  return ipv4Regex.test(ip) || ipv6Regex.test(ip)
}

app.get('/ipinfo', (req, res) => {
  try {
    const ip = req.clientIp || req.ip
    
    if (!ip || !isValidIP(ip)) {
      return res.status(400).json({ error: 'Invalid IP address' })
    }

    const geo = geoip.lookup(ip)
    
    if (!geo) {
      return res.status(404).json({ error: 'Location information not found' })
    }

    res.json({
      ip: ip,
      city: geo.city || 'Unknown',
      region: geo.region || 'Unknown',
      country: geo.country || 'Unknown',
      loc: geo.ll || [],
      timezone: geo.timezone || 'Unknown',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error processing request:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' })
})

app.listen(PORT, () => {
  console.log(`IP info server running at http://localhost:${PORT}/ipinfo`)
})