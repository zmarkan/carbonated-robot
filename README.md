# carbon-now CLI script for batch creating of screenshots of code snippets

Good for creating a bunch of screenshots of snippets to use in blogposts, talks, presentations, or technical documentation. 

This requires Node.js >= 9.80 and the [carbon-now-cli package](https://github.com/mixn/carbon-now-cli) to be installed globally, and a preset to be set.

## Usage

`node carbonated-robot.js IN-DIRECTORY PRESET OUT-DIRECTORY` where IN_DIRECTORY, PRESET, and OUT_DIRECTORY are arguments you supply.

Example: 
`node carbonated-robot.js infiles/ default-preset out/`

