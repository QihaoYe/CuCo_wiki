#!/usr/bin/env python3
# coding: utf-8
__author__ = 'Yee_172'
__data__ = '2017/11/02'


import os
import sys


PATH = sys.path[0]
PATH_templet = PATH + '/templet'


def find_all_files(path):
    everything = [path + '/' + each for each in os.listdir(path)]
    # Get all files and dirs
    paths = [each for each in everything if os.path.isdir(each)]
    # Get all sub_paths for recursion
    result = [each + '\n' for each in everything if os.path.isfile(each)
              and not os.path.splitext(each)[1].lower() == '.md']
    # Filter all files
    for each in paths:
        result += find_all_files(each)
    # Recursion
    return result


ALL_FILE = set([each.replace(PATH + '/', '') for each in find_all_files(PATH_templet)])
for i in ALL_FILE:
    print(i)

IGNORED = set()
with open(sys.path[0] + '/.gitignore','r') as f:
    for each in f:
        IGNORED.add(each)

DIFF = ALL_FILE - IGNORED
print(len(DIFF))
