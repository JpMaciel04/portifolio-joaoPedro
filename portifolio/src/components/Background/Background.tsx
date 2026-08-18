import './Background.css'

function Background() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <span className="bg-fx__glow bg-fx__glow--teal-1" />
      <span className="bg-fx__glow bg-fx__glow--teal-2" />
      <span className="bg-fx__glow bg-fx__glow--purple" />
      <span className="bg-fx__glow bg-fx__glow--amber" />
      <div className="bg-fx__grid" />
    </div>
  )
}

export default Background
