const fetchRepositories = async () => {
  const githubName = document.querySelector("#github-name").value
  try {
    const res = await axios.get(`https://api.github.com/users/${githubName}/repos`)

    const repositoryLists = document.querySelector("#repository-lists")
    repositoryLists.innerHTML = res.data.map(repository => {
      return `<li><a href="${repository.html_url}">${repository.name}</a></li>`
    }).reduce((a, b) => {
      return a + b
    })
  } catch {
    alert("エラ〜")
  }
}
