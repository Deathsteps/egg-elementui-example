const defaultMutation = (state, payload) => {
  Object.assign(state, payload)
}

export function buildMutations4Action (model, actionName) {
  const prefix = model + '/' + actionName
  return {
    [prefix + '/' + 'request']: defaultMutation,
    [prefix + '/' + 'failure']: defaultMutation,
    [prefix + '/' + 'success']: defaultMutation
  }
}
