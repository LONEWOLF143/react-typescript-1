

type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn : boolean
}
function Greet({name, messageCount, isLoggedIn}: GreetProps) {
  return (
    <div>
      {isLoggedIn ? 
        <h2>Welcome {name}!! You have {messageCount} unread messages</h2>
        : 
        "wolcome guest"
      }
    </div>
  )
}

export default Greet