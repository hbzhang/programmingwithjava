---
title: "Tensorflow Concepts"
date: "2019-05-24"
meta_title: "Tensorflow Concepts"
meta_description: "This tutorial is used for going through tensorflow concepts"
keywords:
    - setup
    - production
    - server
    - ubuntu
---

# Tensorflow API documents in details about the API of tensorflow

https://www.tensorflow.org/api_docs/python/tf


## Tensorflow operation (OP) 

An Operation is a node in a TensorFlow Graph that takes zero or more Tensor objects as input, 
and produces zero or more Tensor objects as output. 

Objects of type Operation are created by calling a Python op constructor (such as tf.matmul) or tf.Graph.create_op.

Do you know that you can create a new op in tensorflow?   (follow this link to know how!)

https://www.tensorflow.org/guide/extend/op

You can use your own customized OP like the following:

```
import tensorflow as tf

class ZeroOutTest(tf.test.TestCase):
  def testZeroOut(self):
    zero_out_module = tf.load_op_library('./zero_out.so')
    with self.test_session():
      result = zero_out_module.zero_out([5, 4, 3, 2, 1])
      self.assertAllEqual(result.eval(), [5, 0, 0, 0, 0])

if __name__ == "__main__":
  tf.test.main()

```


## Differences between variable and placeholder


tf.variable often is used to represent weight and bias of neural network training

```
weights = tf.Variable(
    tf.truncated_normal([IMAGE_PIXELS, hidden1_units],
                    stddev=1.0 / math.sqrt(float(IMAGE_PIXELS))), name='weights')
 biases = tf.Variable(tf.zeros([hidden1_units]), name='biases')
 
```

tf.placeholder is used to hold the training data

```
images_placeholder = tf.placeholder(tf.float32, shape=(batch_size, IMAGE_PIXELS))
labels_placeholder = tf.placeholder(tf.int32, shape=(batch_size))

```

## Why do we need tf.name_scope()

used to group some variables together in an op. It is like a variable holding place.

It tells you how many variables used within an operation.

Mostly, the nam_scop() is just used to declare the existence of the variables.

Example: 

```
 with tf.name_scope('biases'):
        biases = {
            'bc1': tf.Variable(tf.random_normal([32])),
            'bc2': tf.Variable(tf.random_normal([64])),
            'bc3': tf.Variable(tf.random_normal([128])),
            'bc4': tf.Variable(tf.random_normal([256])),
            'bd1': tf.Variable(tf.random_normal([1024])),
            'out': tf.Variable(tf.random_normal([NUM_CLASSES]))
        }
```

```
def my_op(a, b, c, name=None):
  with tf.name_scope(name, "MyOp", [a, b, c]) as scope:
    a = tf.convert_to_tensor(a, name="a")
    b = tf.convert_to_tensor(b, name="b")
    c = tf.convert_to_tensor(c, name="c")
    # Define some computation that uses `a`, `b`, and `c`.
    return foo_op(..., name=scope)



```

### Why we need tf.variable_scope()

Mostly used for condition of reuse of variables. If we want to reuse variables, we want to put the variables in variable_scope.

For example:

```
with tf.variable_scope("scope"):
      var1 = tf.get_variable("variable1",[1])
      tf.get_variable_scope().reuse_variables()
      var2=tf.get_variable("variable1",[1])
assert var1 == var2
```



