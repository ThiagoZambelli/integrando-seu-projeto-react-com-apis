import { useEffect, useState } from 'react'
import { TableHead, TableBody, TableRow, TableCell, Table, Paper, TableContainer, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import http from '../../../../http';
import IPrato from '../../../../interfaces/IPrato';



export default function AdministracaoRestaurantes() {
    const [pratos, setPratos] = useState<IPrato[]>([]);

    useEffect(() => {
        http.get<IPrato[]>('pratos/')
            .then(resposta => {
                setPratos(resposta.data)
            })
    }, [])

    const excluirPrato = (pratoASerExcluido: IPrato) => {
        http.delete(`prato/${pratoASerExcluido.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(e => e.id !== pratoASerExcluido.id)
                setPratos([...listaPratos])
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
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {pratos.map(e => (
                        <TableRow key={e.id}>
                            <TableCell>
                                {e.nome}
                            </TableCell>                            
                            <TableCell>
                                {e.tag}
                            </TableCell>
                            <TableCell>
                                <a href={e.imagem} rel='noreferrer' target='_blank'>Ver Imagem</a>
                            </TableCell>
                            <TableCell>
                                [ <Link to={`/admin/prato/${e.id}`}>editar</Link> ]
                            </TableCell>
                            <TableCell>
                                <Button variant='outlined' color='error' onClick={() => excluirPrato(e)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
        </TableContainer >
    )
}
