import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void  // definindo que é uma função que recebe um parametro (string) e não retorna nada (void)
}


export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => { // boa prática (state pega o valor anterior que tinha no meu estado)
            return state + 1  // aqui ele adiciona mais um
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/119368474?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Letícia Souza</strong>
                            <time dateTime="2024-11-19">Publicado há 1h</time> 
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>

                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}