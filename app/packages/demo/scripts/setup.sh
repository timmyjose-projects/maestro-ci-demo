#!/usr/bin/env bash

set -euxo pipefail

# Determines if we are building using `yarn` or `eas` cli
EAS_BUILD=${EAS_BUILD:-""}
APP_VARIANT=${APP_VARIANT:-""}

echo "EAS_BUILD = ${EAS_BUILD}"

ANDROID_PREBUILD_DIR="android"
IOS_PREBUILD_DIR="ios"


if [[ -z "$EAS_BUILD" ]]; then
    # Clean up `app/node_modules`, `payy/ios`, and `payy/android`
    # as part of build
    if [[ "$@" == *"--clean"* || "$@" == *"--full-clean"* ]]
    then
        (
            echo "Cleaning up app artifacts"
            set +e
            set -x
            echo "Cleaning app/node_modules..."
            rm -rf ../../node_modules
            echo "Cleaning payy/ios and payy/android directories..."
            rm -rf ios android
            set -e
        )
    fi
fi

yarn install

if [[ -z "$EAS_BUILD" ]]; then
    # run `prebuild` iff the `android` and `iOS` directories do not exist
    if [[ ! -d ${ANDROID_PREBUILD_DIR} ]] || [[ ! -d ${IOS_PREBUILD_DIR} ]]
    then
        echo "Missing android and/or iOS directories, running expo prebuild..."
        npx expo prebuild
    fi
fi