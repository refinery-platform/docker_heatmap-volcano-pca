from os import listdir, rename, path
import SimpleHTTPServer
import SocketServer

def populate_data_directory():
    dir = 'data'
    files = listdir(dir)
    assert(len(files)==1)
    rename(path.join(dir, files[0]), path.join(dir, 'data.tsv'))

def start_server():
    Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
    SocketServer.TCPServer(("", 80), Handler).serve_forever()


if __name__ == '__main__':
    populate_data_directory()
    start_server()