


    import React, { useState, useEffect, useRef } from 'react';
    import { useDropzone } from 'react-dropzone';
    import { FiUpload, FiX, FiPlus, FiType } from 'react-icons/fi';
    import { useNavigate } from 'react-router-dom';

    const virtualKeyboards = {
        Hindi: {
        default: [
        ['१', '२', '३', '४', '५', '६', '७', '८', '९', '०', '-', 'ञ'],
        ['ट', 'य', 'उ', 'इ', 'ओ', 'प', 'ढ', 'झ', 'भ', 'घ', 'ध', 'ष'],
        ['ऋ', 'आ', 'स', 'द', 'फ', 'ग', 'ह', 'ज', 'क', 'ल', ';', "'"],
        ['छ', 'ऊ', 'ए', 'र', 'त', 'च', 'व', 'ब', 'न', 'म', ',', '.'],
        ['श', 'ः', 'ॉ', 'ो', 'ै', 'ा', 'ी', 'ू', 'ब', 'ह', '्', '?']
        ],
        shift: [
        ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', 'ञ'],
        ['ट', 'य', 'उ', 'इ', 'ओ', 'प', 'ढ', 'झ', 'भ', 'घ', 'ध', 'ष'],
        ['ऋ', 'आ', 'स', 'द', 'फ', 'ग', 'ह', 'ज', 'क', 'ल', ':', '"'],
        ['छ', 'ऊ', 'ए', 'र', 'त', 'च', 'व', 'ब', 'न', 'म', '<', '>'],
        ['श', 'ः', 'ॉ', 'ो', 'ै', 'ा', 'ी', 'ू', 'ब', 'ह', '्', '?']
        ]
    },
    Gujarati: {
        default: [
        ['૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯', '૦', '-', 'ઞ'],
        ['ટ', 'ય', 'ઉ', 'ઇ', 'ઓ', 'પ', 'ઢ', 'ઝ', 'ભ', 'ઘ', 'ધ', 'ષ'],
        ['ઋ', 'આ', 'સ', 'દ', 'ફ', 'ગ', 'હ', 'જ', 'ક', 'લ', ';', "'"],
        ['છ', 'ઊ', 'એ', 'ર', 'ત', 'ચ', 'વ', 'બ', 'ન', 'મ', ',', '.'],
        ['શ', 'ઃ', 'ૉ', 'ો', 'ૈ', 'ા', 'ી', 'ૂ', 'બ', 'હ', '્', '?']
        ],
        shift: [
        ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', 'ઞ'],
        ['ટ', 'ય', 'ઉ', 'ઇ', 'ઓ', 'પ', 'ઢ', 'ઝ', 'ભ', 'ઘ', 'ધ', 'ષ'],
        ['ઋ', 'આ', 'સ', 'દ', 'ફ', 'ગ', 'હ', 'જ', 'ક', 'લ', ':', '"'],
        ['છ', 'ઊ', 'એ', 'ર', 'ત', 'ચ', 'વ', 'બ', 'ન', 'મ', '<', '>'],
        ['શ', 'ઃ', 'ૉ', 'ો', 'ૈ', 'ા', 'ી', 'ૂ', 'બ', 'હ', '્', '?']
        ]
    },
    Tibetan: {
        default: [
        ['༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩', '༠', '-', 'ཉ'],
        ['ཊ', 'ཡ', 'ཨུ', 'ཨི', 'ཨོ', 'པ', 'ཌ', 'ཛ', 'བྷ', 'གྷ', 'དྷ', 'ཥ'],
        ['རྀ', 'ཨཱ', 'ས', 'ད', 'ཕ', 'ག', 'ཧ', 'ཇ', 'ཀ', 'ལ', ';', "'"],
        ['ཚ', 'ཨཱུ', 'ཨེ', 'ར', 'ཏ', 'ཙ', 'ཝ', 'བ', 'ན', 'མ', ',', '.'],
        ['ཤ', 'ཿ', 'ཽ', 'ོ', 'ྰ', 'ཱ', 'ི', 'ུ', 'བ', 'ཧ', '྄', '?']
        ],
        shift: [
        ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', 'ཉ'],
        ['ཊ', 'ཡ', 'ཨུ', 'ཨི', 'ཨོ', 'པ', 'ཌ', 'ཛ', 'བྷ', 'གྷ', 'དྷ', 'ཥ'],
        ['རྀ', 'ཨཱ', 'ས', 'ད', 'ཕ', 'ག', 'ཧ', 'ཇ', 'ཀ', 'ལ', ':', '"'],
        ['ཚ', 'ཨཱུ', 'ཨེ', 'ར', 'ཏ', 'ཙ', 'ཝ', 'བ', 'ན', 'མ', '<', '>'],
        ['ཤ', 'ཿ', 'ཽ', 'ོ', 'ྰ', 'ཱ', 'ི', 'ུ', 'བ', 'ཧ', '྄', '?']
        ]
    }
    };

    const AddYourArt = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [artName, setArtName] = useState({
        English: '',
        Tibetan: '',
        Hindi: '',
        Gujarati: ''
    });
    const [descriptions, setDescriptions] = useState({
        English: '',
        Tibetan: '',
        Hindi: '',
        Gujarati: ''
    });
    const [productDetails, setProductDetails] = useState({
        English: '',
        Tibetan: '',
        Hindi: '',
        Gujarati: ''
    });
    const [price, setPrice] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
    const [shiftActive, setShiftActive] = useState(false);
    const [activeField, setActiveField] = useState('artName');
    const artNameRef = useRef(null);
    const descriptionRef = useRef(null);
    const productDetailsRef = useRef(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 4,
        onDrop: acceptedFiles => {
        if (images.length + acceptedFiles.length > 4) {
            alert('You can only upload up to 4 images');
            return;
        }
        setImages([...images, ...acceptedFiles.map(file => 
            Object.assign(file, {
            preview: URL.createObjectURL(file)
            })
        )]);
        }
    });

    const removeImage = (index) => {
        const newImages = [...images];
        URL.revokeObjectURL(newImages[index].preview);
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleArtNameChange = (e) => {
        setArtName({
        ...artName,
        [selectedLanguage]: e.target.value
        });
    };

    const handleDescriptionChange = (e) => {
        setDescriptions({
        ...descriptions,
        [selectedLanguage]: e.target.value
        });
    };

    const handleProductDetailsChange = (e) => {
        setProductDetails({
        ...productDetails,
        [selectedLanguage]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Convert images to base64 for permanent storage
        const convertImagesToBase64 = async () => {
        const base64Images = await Promise.all(
            images.map(image => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = () => resolve(reader.result);
            });
            })
        );
    
        const newArt = {
            id: Date.now(),
            images: base64Images, // Store as base64 instead of preview URLs
            artName,
            descriptions,
            productDetails,
            price,
            language: selectedLanguage,
            createdAt: new Date().toISOString()
        };
    
        const existingArts = JSON.parse(localStorage.getItem('userArts') || []);
        localStorage.setItem('userArts', JSON.stringify([...existingArts, newArt]));
        
        setIsSubmitting(false);
        alert('Your art has been submitted successfully!');
        navigate('/own-art');
        };
    
        convertImagesToBase64();
    };

    const getTextDirection = (language) => {
        return ['Hindi', 'Tibetan', 'Gujarati'].includes(language) ? 'rtl' : 'ltr';
    };

    const handleKeyPress = (key) => {
        if (key === 'Shift') {
        setShiftActive(!shiftActive);
        return;
        }
        
        if (key === 'Backspace') {
        if (activeField === 'artName') {
            setArtName({
            ...artName,
            [selectedLanguage]: artName[selectedLanguage].slice(0, -1)
            });
        } else if (activeField === 'description') {
            setDescriptions({
            ...descriptions,
            [selectedLanguage]: descriptions[selectedLanguage].slice(0, -1)
            });
        } else {
            setProductDetails({
            ...productDetails,
            [selectedLanguage]: productDetails[selectedLanguage].slice(0, -1)
            });
        }
        return;
        }
        
        if (key === 'Space') key = ' ';
        if (key === 'Enter') key = '\n';
        if (key === 'Toggle Keyboard') {
        setShowVirtualKeyboard(!showVirtualKeyboard);
        return;
        }
        
        if (activeField === 'artName') {
        setArtName({
            ...artName,
            [selectedLanguage]: artName[selectedLanguage] + key
        });
        } else if (activeField === 'description') {
        setDescriptions({
            ...descriptions,
            [selectedLanguage]: descriptions[selectedLanguage] + key
        });
        } else {
        setProductDetails({
            ...productDetails,
            [selectedLanguage]: productDetails[selectedLanguage] + key
        });
        }
        
        if (activeField === 'artName' && artNameRef.current) {
        artNameRef.current.focus();
        } else if (activeField === 'description' && descriptionRef.current) {
        descriptionRef.current.focus();
        } else if (activeField === 'productDetails' && productDetailsRef.current) {
        productDetailsRef.current.focus();
        }
    };

    useEffect(() => {
        return () => {
        images.forEach(image => URL.revokeObjectURL(image.preview));
        };
    }, [images]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md relative">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Add Your Art</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Section */}
            <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload Your Artwork</h2>
            <p className="text-sm text-gray-500 mb-4">You can upload up to 4 images (JPEG, PNG)</p>
            
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors">
                <input {...getInputProps()} />
                <FiUpload className="mx-auto text-3xl text-indigo-500 mb-2" />
                <p className="text-gray-600">Drag & drop images here, or click to select files</p>
            </div>
            
            {/* Preview Images */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                <div key={index} className="relative group">
                    <img 
                    src={image.preview} 
                    alt={`Preview ${index + 1}`} 
                    className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                    <FiX size={14} />
                    </button>
                </div>
                ))}
                
                {images.length < 4 && (
                <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer h-32"
                    {...getRootProps()}
                >
                    <FiPlus className="text-2xl text-gray-400" />
                </div>
                )}
            </div>
            </div>
            
            {/* Language Selection */}
            <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Select Language
            </label>
            <select
                id="language"
                value={selectedLanguage}
                onChange={(e) => {
                setSelectedLanguage(e.target.value);
                setShowVirtualKeyboard(false);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="English">English</option>
                <option value="Tibetan">Tibetan</option>
                <option value="Hindi">Hindi</option>
                <option value="Gujarati">Gujarati</option>
            </select>
            </div>
            
            {/* Art Name Section */}
            <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Art Name</h2>
            <div>
                <label htmlFor="artName" className="block text-sm font-medium text-gray-700 mb-1">
                Name in {selectedLanguage}
                </label>
                <input
                id="artName"
                ref={artNameRef}
                value={artName[selectedLanguage]}
                onChange={handleArtNameChange}
                onFocus={() => setActiveField('artName')}
                className={`w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    ['Hindi', 'Tibetan', 'Gujarati'].includes(selectedLanguage) ? 'text-right' : 'text-left'
                }`}
                style={{ direction: getTextDirection(selectedLanguage) }}
                placeholder={
                    selectedLanguage === 'Hindi' ? 'कला का नाम दर्ज करें...' :
                    selectedLanguage === 'Gujarati' ? 'કલાનું નામ દાખલ કરો...' :
                    selectedLanguage === 'Tibetan' ? 'ལྷུན་པའི་མིང་བྲིས་པ།...' :
                    'Enter art name...'
                }
                />
            </div>
            </div>
            
            {/* Art Description Section */}
            <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Art Description</h2>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description in {selectedLanguage}
                </label>
                <textarea
                id="description"
                ref={descriptionRef}
                value={descriptions[selectedLanguage]}
                onChange={handleDescriptionChange}
                onFocus={() => setActiveField('description')}
                rows={5}
                className={`w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    ['Hindi', 'Tibetan', 'Gujarati'].includes(selectedLanguage) ? 'text-right' : 'text-left'
                }`}
                style={{ direction: getTextDirection(selectedLanguage) }}
                placeholder={
                    selectedLanguage === 'Hindi' ? 'अपनी कला का वर्णन करें...' :
                    selectedLanguage === 'Gujarati' ? 'તમારી કલાનું વર્ણન કરો...' :
                    selectedLanguage === 'Tibetan' ? 'རང་གི་ལྷུན་པའི་སྐོર་བརྗོད་པ།...' :
                    'Describe your artwork...'
                }
                />
            </div>
            </div>
            
            {/* Product Details Section */}
            <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Product Details</h2>
            <div>
                <label htmlFor="productDetails" className="block text-sm font-medium text-gray-700 mb-1">
                Details in {selectedLanguage}
                </label>
                <textarea
                id="productDetails"
                ref={productDetailsRef}
                value={productDetails[selectedLanguage]}
                onChange={handleProductDetailsChange}
                onFocus={() => setActiveField('productDetails')}
                rows={5}
                className={`w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    ['Hindi', 'Tibetan', 'Gujarati'].includes(selectedLanguage) ? 'text-right' : 'text-left'
                }`}
                style={{ direction: getTextDirection(selectedLanguage) }}
                placeholder={
                    selectedLanguage === 'Hindi' ? 'उत्पाद विवरण दर्ज करें...' :
                    selectedLanguage === 'Gujarati' ? 'ઉત્પાદન વિગતો દાખલ કરો...' :
                    selectedLanguage === 'Tibetan' ? 'ཡོ་བྱད་ཀྱི་ཞིབ་ཕྲ་བྲིས་པ།...' :
                    'Enter product details...'
                }
                />
            </div>
            </div>
            
            {/* Virtual Keyboard */}
            {['Hindi', 'Tibetan', 'Gujarati'].includes(selectedLanguage) && (
            <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                    <h3 className="font-medium">{selectedLanguage} Keyboard</h3>
                    <button
                    type="button"
                    onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
                    className={`flex items-center justify-center gap-2 px-3 py-1 rounded-md text-sm ${
                        showVirtualKeyboard ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                    >
                    <FiType size={14} />
                    {showVirtualKeyboard ? 'Hide' : 'Show'}
                    </button>
                </div>
                {showVirtualKeyboard && (
                    <button 
                    type="button" 
                    onClick={() => setShiftActive(!shiftActive)}
                    className={`px-3 py-1 rounded text-sm ${shiftActive ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}
                    >
                    Shift
                    </button>
                )}
                </div>
                
                {showVirtualKeyboard && (
                <div className="space-y-1">
                    {(shiftActive ? virtualKeyboards[selectedLanguage].shift : virtualKeyboards[selectedLanguage].default).map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1">
                        {row.map((key, keyIndex) => (
                        <button
                            key={keyIndex}
                            type="button"
                            onClick={() => handleKeyPress(key)}
                            className="flex-1 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300"
                        >
                            {key}
                        </button>
                        ))}
                    </div>
                    ))}
                    <div className="flex gap-1">
                    <button
                        type="button"
                        onClick={() => handleKeyPress('Space')}
                        className="flex-[5] py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300"
                    >
                        Space
                    </button>
                    <button
                        type="button"
                        onClick={() => handleKeyPress('Backspace')}
                        className="flex-1 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300"
                    >
                        ⌫
                    </button>
                    <button
                        type="button"
                        onClick={() => handleKeyPress('Enter')}
                        className="flex-1 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300"
                    >
                        ↵
                    </button>
                    </div>
                </div>
                )}
            </div>
            )}
            
            {/* Price Section */}
            <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Pricing</h2>
            <div className="flex items-center">
                <span className="mr-2 text-gray-700">₹</span>
                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price in INR"
                className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
                />
            </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
            <button
                type="submit"
                disabled={isSubmitting || images.length === 0}
                className={`w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors ${
                (isSubmitting || images.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {isSubmitting ? 'Submitting...' : 'Publish Your Art'}
            </button>
            </div>
        </form>
        </div>
    );
    };

    export default AddYourArt;