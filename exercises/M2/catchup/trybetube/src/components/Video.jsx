import React from 'react';
import VideoList from './VideoList';
import { connect } from 'react-redux';

class Video extends React.Component {
  render() {
    // state que veio da store em vez do location
    const { video } = this.props;
    console.log(video);
    return video ? (
      <main className="flex">
        <section className="left">
          <h1>{ video.titulo }</h1>
          <img src={ video.imagem } alt={ video.titulo } width="100%" />
          <h3 className="left">{ `Publicado em: ${video.publicado} por ${video.publicado_por}` }</h3>
          { video.comentarios.map((comentario) => (
            <section className="left">
              <h4>{comentario.nome}</h4>
              <p>{comentario.conteudo}</p>
            </section>
          )) }
        </section>
        <aside className="list">
          <VideoList />
        </aside>
      </main>
    ) : <div >Loading...</div>
  }
}

const storeToProp = (store) => ({
  video: store.video
})

export default connect(storeToProp)(Video)
