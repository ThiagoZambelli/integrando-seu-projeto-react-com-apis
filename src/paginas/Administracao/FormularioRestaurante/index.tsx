import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom';
import IRestaurante from '../../../interfaces/IRestaurante';
import http from '../../../http';



export default function FormularioRestaurante() {
    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametros])

    const [nomeRestaurante, setNomeRestaurante] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, { nome: nomeRestaurante })
                .then(() => {
                    alert('Atualizado com sucesso !')
                })
                .catch((erro) => {
                    console.log(`Problema na atualização devido a:\n${erro}`)
                    alert('Falha na atualização')
                })

        } else {
            http.post('restaurantes/', { nome: nomeRestaurante })
                .then(() => {
                    alert('Cadastrado com sucesso !')
                })
                .catch((erro) => {
                    console.log(`Problema no cadastro devido a:\n${erro}`)
                    alert('Falha no cadastro')
                })
        }

    }

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center' }}>
            <Typography component='h1' variant='h6' >Formulario de Restaurantes</Typography>
            <Box component='form' onSubmit={aoSubmeterForm}>
                <TextField
                    value={nomeRestaurante}
                    onChange={e => setNomeRestaurante(e.target.value)}
                    id='nomeRestaurante'
                    label="Nome do Restaurante"
                    variant='standard'
                    fullWidth
                    required
                />
                <Button 
                    type='submit' 
                    variant='outlined'
                    fullWidth
                    sx={{marginTop: 1}}
                >
                    Cadastrar
                </Button>
            </Box>
        </Box>
    )
}
