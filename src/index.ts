import * as core from '@actions/core'

const name = core.getInput('name')
core.info(`hello, ${name}`)
