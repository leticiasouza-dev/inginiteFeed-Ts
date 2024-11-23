import styles from './Avatar.module.css'

interface AvatarProps { 
    hasBorder?: boolean;//? usamos quando um elemento não é obrigatório
    src: string;
    alt?: string
}

export function Avatar({ hasBorder = true, alt, src}: AvatarProps){ // desestruturação é o nome quando minha propriedade já vem com um valor pré definido

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
            alt={alt}
        />
    )
}