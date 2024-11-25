import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author{
    name: string;
    role: string;
    avatarUrl: string
}

interface Content{
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType {
    id: number
    author: Author;
    publishedAt: Date;
    content: Content[]
}


interface PostPros {
    post: PostType
}

export function Post({author, publishedAt, content}: PostPros){ // aqui devemos informar o tipo do meu objeto todo, não individual

    const [comments, setComments] = useState(["post muito legal"]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDataFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { // manipulando datas
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateMNewComment(event: FormEvent){ // defini que essa função é disparada pelo formulário
        event.preventDefault()

        setComments([...comments, newCommentText ]) // pegando todos os comentários existentes e adicionando mais um
        setNewCommentText('')
        
    }   

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) { // defini que essa função é disparada pelo textarea do html
        setNewCommentText(event.target.value)
        event.target.setCustomValidity('')  // quando o usuário digitar alguma coisa nãoa aparece mais mensagem nenhum
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){ // defini que essa função é disparada tempo invalid do textarea HTML
        event.target.setCustomValidity("Esse campo é obrigatório") // mudando a mensagem que vá aparecer quando o campo estiver vazio
    }

    function deleteComment(commentToDelete: string){
        const commenstWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete // menter na lista somente os comentários que são diferentes do qual eu quero deletar
        })

        setComments(commenstWithoutDeleteOne); // removendo aquele comentário 
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return(
        <article className={styles.post}>
            <header className={styles.cabecalho}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>      

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>



                <time title={publishedDataFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time> 
            </header>
                <div className={styles.content}>
                    {content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link'){
                            return <p key={line.content}><a>{line.content}</a></p>
                        }
                    })}
                </div>
            

                <form onSubmit={handleCreateMNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                        name='comment'
                        onChange={handleNewCommentChange}
                        value={newCommentText}
                        placeholder='Deixe um comentário'
                        onInvalid={handleNewCommentInvalid} // usamos quando o valor digitado for invalido
                        required
                    />

                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                    
                </form>

                <div className={styles.commentList}>
                    {comments.map(coment => {
                        return (
                            <Comment 
                                key={coment} 
                                content={coment} 
                                onDeleteComment={deleteComment}
                        />)
                    })}
                </div>
        </article>
    )
}