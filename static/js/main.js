
function toggleFieldsByWorkStatus() {
    const workStatusField = document.getElementById('id_work_status');
    const isOn = workStatusField.value == '0';
    const targetFields = document.querySelectorAll('.work-fields');

    targetFields.forEach(field => {
        field.style.display = isOn ? 'block' : 'none';
        const inputs = field.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = !isOn;
        });
    });
}

function setupToggleWorkStatusEventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        toggleFieldsByWorkStatus();

        document.getElementById('id_work_status').addEventListener('change', toggleFieldsByWorkStatus);
    });
}


function toggleFieldsByLunch() {
    const lunch = document.getElementById('id_lunch');
    const eatLunch = (lunch.value == '0' || lunch.value == '1');

    const targetFields = document.querySelectorAll('.eat-lunch-at');

    targetFields.forEach(field => {
        field.style.display = eatLunch ? 'inline-block' : 'none';
    });
}

// ボタンの表示/非表示を管理
function updateButtons() {
    const workSections = Array.from(document.querySelectorAll('.work-section'));
    const lastVisibleSectionReverseIndex = workSections.slice().reverse().findIndex(s => s.style.display !== 'none');
    const lastVisibleSectionIndex = workSections.length - 1 - lastVisibleSectionReverseIndex;

    // 追加ボタン
    const addButton = document.getElementById('add-button');
    if (lastVisibleSectionIndex == workSections.length - 1) {
        addButton.disabled = true;
    } else {
        addButton.disabled = false;
    }

    // 削除ボタン
    workSections.forEach((section, index) => {
        const removeButton = section.querySelector('.remove-button');

        if (index == lastVisibleSectionIndex) {
            if (index != 0) {
                removeButton.style.display = 'inline-block';
            } else {
                removeButton.style.display = 'none';
            }
        } else {
            removeButton.style.display = 'none';
        }
    });
}

function clearFields(section) {
    const inputs = section.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (input.type === 'radio' || input.type === 'checkbox') {
            input.checked = false; // ラジオボタンとチェックボックスを解除
        } else if (input.tagName === 'SELECT') {
            input.selectedIndex = 0; // セレクトボックスを初期状態に戻す
        } else {
            input.value = ''; // その他の入力をクリア
        }
    });
}

function addEventListnerToWorkSectionsButtons() {

    const workSections = Array.from(document.querySelectorAll('.work-section'));

    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', (event) => {
        const nextSection = workSections.find(s => s.style.display === 'none');
        if (nextSection) {
            nextSection.style.display = 'block';  // 次の勤務セクションを表示
            updateButtons();
        }
    });

    workSections.forEach(section => {
        const removeButton = section.querySelector('.remove-button');
        removeButton.addEventListener('click', (event) => {
            clearFields(section);
            section.style.display = 'none';
            updateButtons();
        });
    });
}

function setupToggleLunchEventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        toggleFieldsByLunch();
        updateButtons();

        document.getElementById('id_lunch').addEventListener('change', toggleFieldsByLunch);
        addEventListnerToWorkSectionsButtons();
    });
}

function toggleFieldsByMorningTransport() {
    const morningTransportField = document.getElementById('id_morning_transport_means');
    const isPickup = morningTransportField.value == '0';
    const targetFields = document.querySelectorAll('.pickup-fields');

    targetFields.forEach(field => {
        field.style.display = isPickup ? 'block' : 'none';
        const inputs = field.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = !isPickup;
        });
    });
}

function toggleFieldsByReturnTransport() {
    const morningTransportField = document.getElementById('id_return_transport_means');
    const isDropoff = morningTransportField.value == '0';
    const targetFields = document.querySelectorAll('.dropoff-fields');

    targetFields.forEach(field => {
        field.style.display = isDropoff ? 'block' : 'none';
        const inputs = field.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = !isDropoff;
        });
    });
}

function setupToggleTransportEventListener() {
    toggleFieldsByMorningTransport();
    toggleFieldsByReturnTransport();
    
    document.getElementById('id_morning_transport_means').addEventListener('change', toggleFieldsByMorningTransport);
    document.getElementById('id_return_transport_means').addEventListener('change', toggleFieldsByReturnTransport);    
}