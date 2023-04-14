import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import http from '../../../../http';
import ITag from '../../../../interfaces/ITags';
import IRestaurante from '../../../../interfaces/IRestaurante';




export default function FormularioPrato() {

    const [nomePrato, setNomePrato] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tags, setTags] = useState<ITag[]>([]);
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
    const [imagem, setImagem] = useState<File | null>(null)
    const [tag, setTag] = useState('');
    const [restaurante, setRestaurante] = useState('');

    useEffect(() => {
        http.get<{ tags: ITag[] }>('tags/')
            .then(resposta => setTags(resposta.data.tags))

        http.get<IRestaurante[]>('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        const formData = new FormData();

        formData.append('nome', nomePrato)
        formData.append('tag', tag)
        formData.append('descricao', descricao)
        formData.append('restaurante', restaurante)

        if (imagem) {
            formData.append('imagem', imagem)
        }

        http.request({
            url: 'pratos/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {
                setDescricao('')
                setNomePrato('')
                setRestaurante('')
                setTag('')
                alert('Prato cadastrado com sucesso!')})
            .catch(erro => console.log(erro))
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
            <Typography component='h1' variant='h6' >Formulario de Pratos</Typography>
            <Box component='form' onSubmit={aoSubmeterForm}>
                <TextField
                    value={nomePrato}
                    onChange={e => setNomePrato(e.target.value)}
                    id='nomePrato'
                    label="Nome do Prato"
                    variant='standard'
                    fullWidth
                    required
                    margin='dense'
                />
                <TextField
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    id='descricao'
                    label="Descrição do Prato"
                    variant='standard'
                    fullWidth
                    required
                    margin='dense'
                />
                <FormControl
                    margin='dense'
                    fullWidth
                >
                    <InputLabel id='select-tag' >Tag</InputLabel>
                    <Select labelId='select-tag' value={tag} onChange={e => setTag(e.target.value)}>
                        {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                            {tag.value}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl
                    margin='dense'
                    fullWidth
                >
                    <InputLabel id='select-restaurante' >Restaurante</InputLabel>
                    <Select labelId='select-restaurante' value={restaurante} onChange={e => setRestaurante(e.target.value)}>
                        {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
                            {restaurante.nome}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                <input type='file' onChange={selecionarArquivo} />
                <Button
                    type='submit'
                    variant='outlined'
                    fullWidth
                    sx={{ marginTop: 1 }}
                >
                    Cadastrar
                </Button>
            </Box>
        </Box>

    )
}
