import React, { useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

export default function PostDetail() {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const { search } = location;
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  // console.log("🚀 ~ params:", params)
  // console.log("🚀 ~ location:", location)
  // console.log("🚀 ~ search:", search)
  // console.log("🚀 ~ queryParams:", queryParams)
  // console.log("🚀 ~ queryParams.get('page'):", queryParams.get('page'))
  const handleNavigate = () => {
    history.push('/posts');
  }

  return (
    <>
      <button onClick={handleNavigate}>
        Voltar para lista de posts
      </button>

      <h1>Detalhe do Post</h1>
      <p>Id do post: {params.id}</p>
      <p>Autor: {params.author}</p>
      {search && <p>Meu Query Param: {queryParams.get('page')}</p>}
    </>
  )
}