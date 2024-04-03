<script setup lang="ts">
import {DBInput, DBDivider, DBTextarea, DBSelect, DBCheckbox, DBRadio} from "@db-ui/v-components";
import { ref } from 'vue'

const formData = ref({
  name: 'Paul (name suggestion)',
  issue: '',
  transport: 'car',
  consent: true,
  radio: 'radio-2',
})

const onChangeSelect = (value: any) => {
  console.log('onChangeSelect', value)
}

const onChangeCheckbox = (event: any) => {
  console.log('onChangeCheckbox', event.target.checked)
  formData.value.consent = event.target.checked
}
</script>

<template>
  <div class="centered">
    <h1>Form Components</h1>

    <DBDivider/>

    <form>
      <DBInput
          label="Your Name"
          placeholder="Start typing"
          v-model:value="formData.name"
      ></DBInput>

      <br/>

      <DBTextarea
          label="Your Issue"
          placeholder="Please describe your issue..."
          description="fwe few few"
          icon="account"
          v-model:value="formData.issue"
      />

      <br />

      <DBSelect icon="piggybank" :disabled="false" label="Wähle deinen Zug" v-model:value="formData.transport" @change="onChangeSelect">
        <option value="ice">ICE, schnell</option>
        <option value="regio">Regio, eher langsam</option>
        <option value="car">Auto, uncool</option>
      </DBSelect>

      <br />

      <!-- v-model:value="formData.consent" -->
<!--      :checked="formData.consent"-->
<!--      @change="onChangeCheckbox"-->
      <DBCheckbox
          title="Is this a tooltip?"
          v-model:value="formData.consent"
          name="checkbox_consent"
          message="Message test"
          valid-message="Danke für die Eingabe"
          invalid-message="Zustimmung ist nötig!"
          :required="true"
          label="Stimme jetzt den AGB zu!">
        Ja, ich habe die AGBs gelesen und finde sie super
      </DBCheckbox>

      <br/>

      <ul>
        <DBRadio
            @change="formData.radio = 'radio-1'"
            name="radio-group"
            value="radio-1"
            :checked="formData.radio === 'radio-1'"
        >
          Radio Item 1
        </DBRadio>
        <DBRadio
            @change="formData.radio = 'radio-2'"
            name="radio-group"
            value="radio-2"
            :checked="formData.radio === 'radio-2'"
        >
          Radio Item 2
        </DBRadio>
      </ul>
    </form>

  </div>
</template>

<style scoped lang="scss">
.centered {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

h5 {
  margin-top: 30px;
}
</style>