# Information Security and Quality Assurance Project - Metric-Imperial Converter

## Description

This project is part of the **FCC Information Security and Quality Assurance Certification**.

## User stories

1. I will help prevent browsers from trying to guess (“sniff”) the `MIME type`, which can have security implications, setting the `X-Content-Type-Options` header to `nosniff`.
2. I will prevent _cross-site_ scripting (`XSS`) attacks setting the `X-XSS-Protection` header to prevent reflected `XSS` attacks.
3. I can `GET <https://fcc-metric-imperial-project.herokuapp.com/api/convert>` with a single parameter containing an accepted number and unit and have it converted.
4. I can convert _gal_ to _L_ and vice versa. (1 gal to 3.78541 L)
5. I can convert _lbs_ to _kg_ and vice versa. (1 lbs to 0.453592 kg)
6. I can convert _mi_ to _km_ and vice versa. (1 mi to 1.60934 km)
7. If the unit of measurement is invalid, `422` will be returned.
8. If the number is invalid, `422` will be returned.
9. If both are invalid, `422` will be returned.
10. I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
11. My return will consist of the `initNum`, `initUnit`, `returnNum`, `returnUnit`, and `string` spelling out units in format `{initNum}` `{initial_Units}` converts to `{returnNum}` `{return_Units}` with the result rounded to 5 decimals.
12. All functional tests are complete and passing.

## Example usage

<https://fcc-metric-imperial-project.herokuapp.com/api/convert?input=4gal>

<https://fcc-metric-imperial-project.herokuapp.com/api/convert?input=1/2km>

<https://fcc-metric-imperial-project.herokuapp.com/api/convert?input=5.4/3lbs>

<https://fcc-metric-imperial-project.herokuapp.com/api/convert?input=kg>

## Example return

`{ "initNum": "3.1", "initUnit": "mi", "returnNum": 4.98896624035308, "returnUnit": "km", "string": "3.1mi converts to 4.98896624035308km" }`

Coded with music, coffe and love by _Claudio Cortese_
