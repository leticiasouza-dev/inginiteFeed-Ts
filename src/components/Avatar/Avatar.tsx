import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { // definindo que essa interface tem todas as propriedade que uma img pode receber, não sendo necessário reescrevelas 
    hasBorder?: boolean;//? usamos quando um elemento não é obrigatório
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps){ // desestruturação é o nome quando minha propriedade já vem com um valor pré definido

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
}