import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function PostDetail() {
  const params = useParams();
  const location = useLocation();
  const { search } = location;
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log("🚀 ~ params:", params)
  console.log("🚀 ~ location:", location)
  console.log("🚀 ~ search:", search)
  console.log("🚀 ~ queryParams:", queryParams)
  console.log("🚀 ~ queryParams.get('page'):", queryParams.get('page'))

  return (
    <>
      <h1>Detalhe do Post</h1>
      <p>Id do post: {params.id}</p>
      <p>Autor: {params.author}</p>
      {search && <p>Meu Query Param: {queryParams.get('page')}</p>}
    </>
  )
}