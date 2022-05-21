import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';
import  Pagination  from '@mui/material/Pagination';
import  Stack  from '@mui/material/Stack';

const ListadoNoticias = () => {

    const {noticias, totalNoticias,handleChangePagina,pagina} = useNoticias();

    const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
    <Typography
    variant='h3' textAlign="center" marginY={5} component="h2">
        Ultimas Noticias
    </Typography>

    <Grid
    container
    spacing={3}
    >

        {noticias.map(noticia => (
            <Noticia key={noticia.url} noticia={noticia}/>
        ))}

    </Grid>
    <Stack
    sx={{marginTop: 5}}
    spacing={2}
    direction='row'
    justifyContent='center'
    alignItems='center'
    >
        <Pagination count={totalPaginas} color="primary" onChange={handleChangePagina} page={pagina}/>
    </Stack>
    </>
  )
}

export default ListadoNoticias