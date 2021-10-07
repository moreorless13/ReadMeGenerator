const generateMarkdown = (data) => {
    return `
# ${data.name}

# Table of Contents

- [License](#License)
- [Description](#Description)
- [Installation](#Installation)
- [Instructions](#Instructions)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

    
## Description:

![License](https://img.shields.io/badge/License-${data.license}-blue.svg) (https://opensource.org/licenses/${data.license})

\n* ${data.description}
    
## Installation:
\`\`\`
${data.installation}
\`\`\`
## Instructions:
\`\`\`
${data.instructions}
\`\`\`
     
## Tests:
\`\`\`
${data.tests}
\`\`\`
## Questions:
\n* GitHub: https://github.com/${data.username}`
}

module.exports = {
    generateMarkdown,
}