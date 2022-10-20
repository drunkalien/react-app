#!/bin/sh -l

echo "::add-mask::$1"
echo "Hello $1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some values"
echo "something"
echo "something"
echo "something"
echo "something"
echo "::endgroup::"

echo "::set-env name=HELLO::hello"