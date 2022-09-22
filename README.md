Validate an Aadhar Card Number for your frontend and backend systems 

NodeJS
    npm i aadharjs
    // or
    yarn add aadharjs
In your .js file add following code

const isValid = require('aadharjs')

## Usage
1. AADHAR (Issued by - Unique Identification Authority of India):
validates => Input must be in format ############, and have length 12 and last char is Valid checksum.
```
const invalid = '499128665246'
const valid =   '499118665246'
isValid.aadhar(invalid) /* returns false */
isValid.aadhar(valid)   /* returns true  */
```
You can also calculate the checksum of a AADHAR by -
isValid.aadhar.getValidDigit('49911866524') /* return 6 */

For Feature requests and Error reporting:
create an issue on github repository or contact directly to tazimmadre5041@gmail.com

**Don't Forget to add a star to github repo. Please provide your comments, suggest improvements and other codes which are not covered in this package.