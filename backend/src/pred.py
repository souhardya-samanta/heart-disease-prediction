#!/usr/bin/env python
# coding: utf-8

# #Importing packages

# In[11]:
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder, OneHotEncoder, StandardScaler, PolynomialFeatures
from sklearn.tree import DecisionTreeClassifier


# # importing the dataset

# In[12]:


ds = pd.read_csv("heart.csv")
# print("Dimention of Dataset", ds.shape,"\n\n")
ds.head()


# # splitting into dependent and independent variables
#

# In[13]:


X = ds.iloc[:, 0:13].values
y = ds.iloc[:, -1].values
X


# In[14]:


y


# #Splitting into training and testing

# In[15]:


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)


# # Feature Scaling

# In[16]:


from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)


# # Decision Tree fiiting int the model

# In[17]:


from sklearn.tree import DecisionTreeClassifier
classifier = DecisionTreeClassifier(criterion = "entropy", random_state = 0)
classifier.fit(X_train, y_train)


# # Predicting the Test set results

# In[18]:


from sklearn.metrics import r2_score
y_pred = classifier.predict(X_test)
# print("Model Accuracy: ",r2_score(y_test, y_pred)*100,"%")


# # Making the Confusion Matrix

# In[19]:


from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)
cm


# #Prediction of Heart Disease for random Patients

# In[ ]:


# 52	1	0	125	212	0	1	168	0	1.0	2	2	3	(Test Input)
flag = 0
while flag == 0:
      lst=list(sys.argv[1].split())
      flag = 1
nplst = np.array(lst)
y_pred1 = classifier.predict(nplst.reshape(1,len(nplst)))
# print()
if y_pred1 != 0:
  print("Patient have Disease.")
else:
  print("Patient is Normal.")


# In[ ]:





# In[ ]:




