from os import listdir
import json
import SimpleHTTPServer
import SocketServer
import re

def as_track(file):
    return {
        "name": re.sub(r'.*\/', '', file),
        "url": 'data/' + file,
        "format": re.sub(r'.*\.', '', file)
        # TODO: indexURL if BAM
    }

def populate_data_directory():
    # files.txt is really for testing rather than production use.
    files = '\n'.join(listdir('data'))
    with open('data/files.txt', 'w') as list_file:
        list_file.write(files)
    # TODO: create index.json or something like that so JS can see where the files are.

def start_server():
    Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
    SocketServer.TCPServer(("", 80), Handler).serve_forever()


if __name__ == '__main__':
    populate_data_directory()
    start_server()