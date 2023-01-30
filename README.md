# hjson-to-json

hjson-to-json is a Node.js command-line tool that can parse HJSON files and return the data in JSON format.

It allows developers to easily convert HJSON files into a structured and easily queriable format, making it simpler to integrate them into their software development workflow.

By converting HJSON files to JSON, hjson-to-json allows developers to import and export them as JSON files, which can be easily read and interpreted by other programs and libraries.

This tool is particularly useful for working with large and complex data that is represented in HJSON format, as it helps to structure and organize the data in a way that is more manageable and easier to understand.

## Installation
To install hjson-to-json, you will need to have Node.js and npm installed on your machine. Once you have these prerequisites installed, you can install hjson-to-json by running the following command:

`npm install -g hjson-to-json`

This will install hjson-to-json globally, allowing you to use it from any directory on your machine.

## Usage
The hjson-to-json command-line tool has the following options:

-i, --input : Specify the input HJSON file to be converted. This option is required.
-o, --output : Specify the output JSON file name. The default value is hjson.json.

## Examples
Here are some examples of using the hjson-to-json tool. To convert a HJSON file to JSON format, you can use the following command:

`hjson-to-json -i abc.hjson -o abc.json`

`hjson-to-json --input school.hjson --output school.json`

`hjson-to-json -i library.hjson`

The first command will parse the HJSON file in the abc.hjson file to JSON format, and save the resulting JSON file to abc.json. The second example converts the school.hjson file to school.json. The third example converts the library.hjson file to the default output file, hjson.json.