import { useEffect, useState } from 'react'
import IRestaurante from '../../interfaces/IRestaurante'
import { TableHead, TableBody, TableRow, TableCell, Table, Paper, TableContainer, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import http from '../../http';



export default function AdministracaoRestaurantes() {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        http.get<IRestaurante[]>('restaurantes/')
            .then(resposta => {
                setRestaurantes(resposta.data)
            })
    }, [])

    const excluirRestaurante = (restauranteASerExcluido: IRestaurante) => {
        http.delete(`restaurantes/${restauranteASerExcluido.id}/`)
        .then(() => {
            const listaRestaurante = restaurantes.filter(e => e.id !== restauranteASerExcluido.id)
            setRestaurantes([...listaRestaurante])
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(e => (
                        <TableRow key={e.id}>
                            <TableCell>
                                {e.nome}
                            </TableCell>
                            <TableCell>
                                [ <Link to={`/admin/restaurantes/${e.id}`}>editar</Link> ]
                            </TableCell>
                            <TableCell>
                                <Button variant='outlined' color='error' onClick={() => excluirRestaurante(e)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
