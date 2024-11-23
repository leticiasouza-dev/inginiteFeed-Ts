import { Avatar } from '../Avatar/Avatar'
import styles from './SideBar.module.css'
import {PencilLine } from 'phosphor-react'

export function SideBar(){
    return(
        <aside className={styles.sideBar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=50&w=500&auto=format&fit=crop&ixlib=rb-40&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.profile}>
                <Avatar  src="https://avatars.githubusercontent.com/u/119368474?v=4"/>
                
                <strong>lele souzaa</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}