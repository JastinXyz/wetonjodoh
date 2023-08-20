export default function Emoji({ emoji, label, className, ...opts }) {
    return (
        <span 
            role="img" 
            aria-label={label ? label : ""} 
            aria-hidden={label ? "false" : "true"}
            className={className}
            {...opts}
        >
            {emoji}
        </span>
    )
}