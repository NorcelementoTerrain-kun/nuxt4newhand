<template>

</template>

<script setup>


</script>

<style scoped>
.template-node-editor {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-group textarea {
  resize: vertical;
}

.field-item {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.field-item input {
  flex: 2;
}

.field-item select {
  flex: 1;
}

.small-btn {
  padding: 4px 8px;
  font-size: 12px;
}

.add-btn {
  padding: 6px 12px;
  background: #f0f0f0;
  border: 1px dashed #ddd;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.save-btn {
  flex: 1;
  padding: 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn {
  flex: 1;
  padding: 10px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>