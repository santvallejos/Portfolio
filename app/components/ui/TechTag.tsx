import Image from "next/image"
import { TagConfig } from "../../types/TagConfig"

interface TechTagProps {
  tag: TagConfig | string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'minimal'
  showIcon?: boolean
  className?: string
}

const TechTag: React.FC<TechTagProps> = ({ 
  tag, 
  size = 'md', 
  variant = 'default',
  showIcon = true,
  className = '' 
}) => {
  // Si es string, renderizar solo el texto
  if (typeof tag === 'string') {
    return (
      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-zinc-800/30 text-zinc-400 ${className}`}>
        {tag}
      </span>
    )
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20
  }

  const variantClasses = {
    default: tag.class || `bg-zinc-800/30 text-zinc-400`,
    outline: `border ${tag.class?.replace('bg-', 'border-').replace('/10', '/30')} bg-transparent`,
    minimal: 'bg-transparent text-zinc-400'
  }

  return (
    <span className={`
      inline-flex items-center gap-2 rounded-full 
      ${sizeClasses[size]} 
      ${variantClasses[variant]}
      ${className}
    `}>
      {showIcon && tag.icon && (
        <Image
          src={tag.icon}
          alt={`${tag.name} icon`}
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="object-contain"
        />
      )}
      {tag.name}
    </span>
  )
}

export default TechTag
