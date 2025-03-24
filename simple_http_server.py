import http.server
import socketserver

# Define the port to listen on
PORT = 8000

# Create an HTTP request handler
Handler = http.server.SimpleHTTPRequestHandler

# Set up the server, binding to the specified port
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()

