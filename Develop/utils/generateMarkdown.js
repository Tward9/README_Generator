// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //'GNU AGPLv3' License
  //[![License: AGPL v3](
  //https://img.shields.io/badge/License-AGPL_v3-blue.svg
  //)](https://www.gnu.org/licenses/agpl-3.0)

  // 'GNU GPLv3' License
  //[![License: GPL v3](
  //https://img.shields.io/badge/License-GPLv3-blue.svg
  //)](https://www.gnu.org/licenses/gpl-3.0)

  // 'GNU LGPLv3' License
  //[![License: LGPL v3](
  //https://img.shields.io/badge/License-LGPL_v3-blue.svg
  //)](https://www.gnu.org/licenses/lgpl-3.0)

  //Mozilla License
  //[![License: MPL 2.0](
  //https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg
  //)](https://opensource.org/licenses/MPL-2.0)

  //Apache License
  //[![License](
  //https://img.shields.io/badge/License-Apache_2.0-blue.svg
  //)](https://opensource.org/licenses/Apache-2.0)

  //'MIT License'
  //[![License: MIT](
  //https://img.shields.io/badge/License-MIT-yellow.svg
  //)](https://opensource.org/licenses/MIT)
  
  //'Boost Software License 1.0' License
  //[![License](
  //https://img.shields.io/badge/License-Boost_1.0-lightblue.svg
  //)](https://www.boost.org/LICENSE_1_0.txt)
  
  //'The Unlicense' License
  //[![License: Unlicense](
  //https://img.shields.io/badge/license-Unlicense-blue.svg
  //)](http://unlicense.org/)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
