import React, {useEffect} from 'react'

const User = (user) => {
  useEffect(() => {
    user.searchUser(user.match.params.login)
  }, [])
  
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following, 
    public_repos, 
    public_gists,
    hireable
  } = user.user;


  return(
    <div>
      <p>{login}</p>
      
    </div>
  )
}

export default User;