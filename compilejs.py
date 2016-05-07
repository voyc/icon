#!/usr/bin/python2.4

import httplib, urllib, sys

# Define the parameters for the POST request and encode them in
# a URL-safe format.

url = 'http://icon.voyc.com/'

arr = [
	('code_url', url + 'namespace.js'),
	('code_url', url + 'icon.js'),
	('code_url', url + 'lib/x.js'),
	('code_url', url + 'lib/gear.js'),
	('code_url', url + 'lib/triangledown.js'),
	('code_url', url + 'lib/triangleup.js'),
	('code_url', url + 'lib/speaker.js'),
	('code_url', url + 'lib/pencil.js'),
	('code_url', url + 'lib/menu.js'),
	('code_url', url + 'lib/spinner.js'),
	('code_url', url + 'lib/grid.js'),
	('code_url', url + 'lib/user.js'),
	('compilation_level', 'ADVANCED_OPTIMIZATIONS'),
	('language', 'ECMASCRIPT5'),
	('output_format', 'text'),
	('output_info', 'compiled_code'),
]

if (len(sys.argv) > 1):
	arr.append(('formatting', 'pretty_print'))

params = urllib.urlencode(arr)

# Always use the following value for the Content-type header.
headers = { "Content-type": "application/x-www-form-urlencoded" }
conn = httplib.HTTPConnection('closure-compiler.appspot.com')
conn.request('POST', '/compile', params, headers)
response = conn.getresponse()
data = response.read()
print data
conn.close()
