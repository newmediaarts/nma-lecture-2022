function createSplitElements(string, splitValue, className, delay){
    const wrapper = document.createElement('span')
    wrapper.setAttribute('aria-hidden', 'true')

    const splitValues = string.split(splitValue)

    splitValues.forEach((value, index) => {
        const valueElement = document.createElement('span')

        valueElement.classList.add(className)
        valueElement.style.setProperty('--delay', delay * index + 's')

        // All spaces must by &nbsp;
        if(value === ' '){
            valueElement.innerHTML = '&nbsp;'
        }else{
            valueElement.innerHTML = value
        }

        wrapper.appendChild(valueElement)
    })

    return wrapper
}

function splitText(element){
    const splitValue = element.getAttribute('data-split').toLowerCase()
    
    // Regex to trim white spice at the start and end of the element content
    const content = element.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()

    // Remove initial content and set accessible attributes
    element.innerHTML = null
    element.setAttribute('aria-label', element.textContent)

    // Default delay
    let delay =  0.1; 

    // Override the delay if the element has a data-delay attribute
    if(element.hasAttribute('data-delay') && element.getAttribute('data-delay') !== ''){
        delay = Number(element.getAttribute('data-delay'))
    }

    // By default split the element by word
    if(splitValue === 'word'){
        element.appendChild(createSplitElements(content, ' ', 'word', delay))
    }else{
        element.appendChild(createSplitElements(content, '', 'letter', delay))
    }
}

export default splitText