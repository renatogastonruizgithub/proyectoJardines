import Swal from 'sweetalert2';

export function alertConfirmation(msg) {
    Swal.fire({
        title: msg,
        icon: 'success',
    });
}

export function alertError(titulo, mensaje) {
    Swal.fire({
        title: titulo,
        icon: 'error',
        text: mensaje,
    });
}

export function alertInfo(titulo, mensaje) {
    Swal.fire({
        title: titulo,
        icon: 'info',
        text: mensaje,
    });
}

export async function alertWarning(titulo, id, handleDelete) {
    let response = false;
    await Swal.fire({
        title: '¿Estás seguro?',
        html: `<strong>${titulo}</strong> se borrará definitivamente`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            handleDelete(id);
        }
    });
    return response;
}

export function closeAlert() {
    Swal.close();
}