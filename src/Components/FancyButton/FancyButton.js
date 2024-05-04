import './FancyButton.css'

function FancyButton({ content }) {
  return (
    <div>
      <button>
        <span class="text">{content}</span>
        <span class="shimmer"></span>
      </button>
    </div>
  )
}

export default FancyButton
