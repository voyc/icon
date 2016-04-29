#!/usr/bin/python2.4

import httplib, urllib, sys

# Define the parameters for the POST request and encode them in
# a URL-safe format.

params = urllib.urlencode([
	('code_url', 'http://icon.hagstrand.com/icon.js'),
	('code_url', 'http://icon.hagstrand.com/lib/x.js'),
	('code_url', 'http://icon.hagstrand.com/lib/gear.js'),
	('code_url', 'http://icon.hagstrand.com/lib/triangledown.js'),
	('code_url', 'http://icon.hagstrand.com/lib/triangleup.js'),
	('code_url', 'http://icon.hagstrand.com/lib/speaker.js'),
	('code_url', 'http://icon.hagstrand.com/lib/pencil.js'),
	('code_url', 'http://icon.hagstrand.com/lib/menu.js'),
	('code_url', 'http://icon.hagstrand.com/lib/spinner.js'),
	('code_url', 'http://icon.hagstrand.com/lib/grid.js'),
	('code_url', 'http://icon.hagstrand.com/lib/user.js'),
#	('compilation_level', 'WHITESPACE_ONLY'),
	('compilation_level', 'SIMPLE_OPTIMIZATIONS'),
	('language', 'ECMASCRIPT5'),
	('output_format', 'text'),
	('output_info', 'compiled_code'),
])

# Always use the following value for the Content-type header.
headers = { "Content-type": "application/x-www-form-urlencoded" }
conn = httplib.HTTPConnection('closure-compiler.appspot.com')
conn.request('POST', '/compile', params, headers)
response = conn.getresponse()
data = response.read()
print data
conn.close()
