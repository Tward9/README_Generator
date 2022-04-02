// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (typeof answers.license_choice === 'string') {
    switch (answers.license_choice) {
      case 'GNU AGPLv3':
        response = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        break;
      case 'GNU GPLv3':
        response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
      case 'GNU LGPLv3':
        response = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        break;
      case 'Mozilla Public License 2.0':
        response = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'Apache License 2.0':
        response = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
      case 'MIT License':
        response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'Boost Software License 1.0':
        response = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      case 'The Unlicense':
        response = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        break;
      default:
        response = ''
        break;
    }
  };
  return response;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if (typeof answers.license_choice === 'string') {
    switch (answers.license_choice) {
      case 'GNU AGPLv3':
        response = '[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0)'
        break;
      case 'GNU GPLv3':
        response = '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)'
        break;
      case 'GNU LGPLv3':
        response = '[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)'
        break;
      case 'Mozilla Public License 2.0':
        response = '[Mozilla Public License 2.0)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'Apache License 2.0':
        response = '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
        break;
      case 'MIT License':
        response = '[MIT License](https://opensource.org/licenses/MIT)'
        break;
      case 'Boost Software License 1.0':
        response = '[Boost Software License 1.0)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      case 'The Unlicense':
        response = '[The Unlicense](http://unlicense.org/)'
        break;
      default:
        response = ''
        break;
    }
  };
  return response;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (answers.license_need_choice === 'yes') {
    return `## License
${renderLicenseLink(answers)}
## Badges
${renderLicenseBadge(answers)}`;
  } else {
    return '';
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  renderLicenseBadge(answers);
  renderLicenseLink(answers);
  const license = renderLicenseSection(answers);
  const readME = `# ${answers.project_title}
  ## Description

  ${answers.project_description}

  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  -[License](#license)

  ## Installation

  The following is required to install the program.
  ${answers.install_command}

  ## Usage

  ${answers.usage}

  Usage Images:

  ![alt text](${answers.usage_img_link})
  ![alt text](${answers.usage_img2_link})
  ![alt text](${answers.usage_img3_link})

  ## Contributing

  ${answers.contribution}

  ## Tests

  ${answers.tests}

  ## Questions

  For questions please check [my GitHub](https://github.com/${answers.github})
  or reach out via email at <${answers.email}>
  `;
  return readME;
};

module.exports = generateMarkdown;
// module.exports = renderLicenseBadge;
// module.exports = renderLicenseLink;
// module.exports = renderLicenseSection;
