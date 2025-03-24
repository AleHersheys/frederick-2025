"use client";
import React, { useState, useRef, useContext } from 'react';
import { CursorContext } from '@/components/CursorContext';
import emailjs from '@emailjs/browser';

const Form = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '+506 ',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(500);
  const telefonoRef = useRef(null);
  const telefonoPrefix = '+506 ';

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'nombre') {
      const filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setFormData({
        ...formData,
        [name]: filteredValue
      });
    } else if (name === 'telefono') {
      const input = e.target;
      const cursorPosition = input.selectionStart;

      let userInput = value;
      if (!userInput.startsWith(telefonoPrefix)) {
        userInput = telefonoPrefix;
      }

      const editablePart = userInput.substring(telefonoPrefix.length);
      const digits = editablePart.replace(/[^0-9]/g, '').slice(0, 8);

      let formatted = digits;
      if (digits.length > 4) {
        formatted = `${digits.slice(0, 4)}-${digits.slice(4, 8)}`;
      }

      const newValue = telefonoPrefix + formatted;

      setFormData({
        ...formData,
        [name]: newValue
      });

      setTimeout(() => {
        if (telefonoRef.current) {
          let newCursorPos = cursorPosition;

          newCursorPos = Math.max(telefonoPrefix.length, newCursorPos);

          if (digits.length > 4 && cursorPosition > telefonoPrefix.length + 4) {
            newCursorPos += 1;
          }

          newCursorPos = Math.min(newCursorPos, newValue.length);

          telefonoRef.current.setSelectionRange(newCursorPos, newCursorPos);
        }
      }, 0);

      validateField(name, newValue);
    } else if (name === 'correo') {
      const filteredValue = value.replace(/\s/g, '');
      setFormData({
        ...formData,
        [name]: filteredValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    if (name === 'mensaje') {
      setCharCount(500 - value.length);
    }

    if (name !== 'telefono') validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case 'nombre':
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          newErrors.nombre = 'El nombre solo puede contener letras y acentos.';
        } else {
          delete newErrors.nombre;
        }
        break;
      case 'telefono':
        if (!/^\+506 \d{4}-\d{4}$/.test(value)) {
          newErrors.telefono = 'El teléfono debe tener el formato +506 XXXX-XXXX.';
        } else {
          delete newErrors.telefono;
        }
        break;
      case 'correo':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.correo = 'Por favor, introduce un correo electrónico válido.';
        } else {
          delete newErrors.correo;
        }
        break;
      case 'asunto':
        if (value.length > 100) {
          newErrors.asunto = 'El asunto no puede exceder los 100 caracteres.';
        } else {
          delete newErrors.asunto;
        }
        break;
      case 'mensaje':
        if (value.length > 500) {
          newErrors.mensaje = 'El mensaje no puede exceder los 500 caracteres.';
        } else {
          delete newErrors.mensaje;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      emailjs.sendForm(
        'service_0fbnpiw',
        'template_ow8z5pk',
        formRef.current,
        'QXk0whw6tPuUAbM7y'
      )
      .then(() => {
        alert('Formulario enviado correctamente');
        setFormData({
          nombre: '',
          telefono: '+506 ',
          correo: '',
          asunto: '',
          mensaje: ''
        });
        setCharCount(500);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error.text || error);
        alert('Hubo un error al enviar el formulario. Verifica la configuración.');
      });
    } else {
      alert('Por favor, corrige los errores antes de enviar el formulario.');
    }
  };

  const isFormValid = () => {
    return Object.keys(errors).length === 0 &&
           formData.nombre &&
           formData.telefono &&
           formData.asunto &&
           formData.mensaje;
  };

  return (
    <form ref={formRef} className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='input' 
        placeholder='Nombre' 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} 
        maxLength={50}
      />
      {errors.nombre && <span className="text-red-500">{errors.nombre}</span>}

      <input 
        ref={telefonoRef}
        type="text" 
        className='input' 
        placeholder='Teléfono' 
        name="telefono" 
        value={formData.telefono} 
        onChange={handleChange} 
        maxLength={14}
      />
      {errors.telefono && <span className="text-red-500">{errors.telefono}</span>}

      <input 
        type="text" 
        className='input' 
        placeholder='Correo electrónico' 
        name="correo" 
        value={formData.correo} 
        onChange={handleChange} 
        maxLength={100}
      />
      {errors.correo && <span className="text-red-500">{errors.correo}</span>}

      <input 
        type="text" 
        className='input' 
        placeholder='Asunto' 
        name="asunto" 
        value={formData.asunto} 
        onChange={handleChange} 
        maxLength={100}
      />
      {errors.asunto && <span className="text-red-500">{errors.asunto}</span>}

      <textarea 
        className="textarea mb-2" 
        placeholder="Escribe tu mensaje" 
        name="mensaje" 
        value={formData.mensaje} 
        onChange={handleChange} 
        maxLength={500}
      />
      <span className="text-sm text-gray-500">{charCount} caracteres restantes</span>
      {errors.mensaje && <span className="text-red-500">{errors.mensaje}</span>}

      <div className="flex justify-center">
        <button 
          type="submit"
          className={`btn ${
            isFormValid()
              ? "bg-[#F19687] hover:bg-[#ec806f]/90 text-white"
              : "bg-[#FAD4CE] text-white cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
          onMouseEnter={isFormValid() ? mouseEnterHandler : undefined}
          onMouseLeave={isFormValid() ? mouseLeaveHandler : undefined}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;