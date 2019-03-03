import argparse
import ipaddress

parser = argparse.ArgumentParser()
parser.add_argument("-i", "--ipaddr")
args = parser.parse_args()

try:
    ip_addr = ipaddress.ip_address(args.ipaddr)
except ValueError:
    print ValueError