import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Brain, 
  Database, 
  FlaskConical, 
  BarChart3, 
  Rocket, 
  Settings, 
  HelpCircle,
  Activity,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Menu,
  X
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import './App.css'

// Mock data for demonstrations
const trainingData = [
  { epoch: 1, loss: 0.95, accuracy: 0.65 },
  { epoch: 2, loss: 0.82, accuracy: 0.72 },
  { epoch: 3, loss: 0.71, accuracy: 0.78 },
  { epoch: 4, loss: 0.63, accuracy: 0.83 },
  { epoch: 5, loss: 0.58, accuracy: 0.86 },
  { epoch: 6, loss: 0.54, accuracy: 0.88 },
  { epoch: 7, loss: 0.51, accuracy: 0.90 },
  { epoch: 8, loss: 0.48, accuracy: 0.91 },
  { epoch: 9, loss: 0.46, accuracy: 0.92 },
  { epoch: 10, loss: 0.44, accuracy: 0.93 }
]

const modelPerformanceData = [
  { name: 'CNN-ResNet50', accuracy: 94.2, speed: 85 },
  { name: 'LSTM-Attention', accuracy: 91.8, speed: 72 },
  { name: 'Transformer', accuracy: 96.1, speed: 68 },
  { name: 'Custom-MLP', accuracy: 88.5, speed: 95 },
  { name: 'GAN-Generator', accuracy: 89.3, speed: 58 }
]

const usageData = [
  { name: 'Image Classification', value: 35, color: '#8884d8' },
  { name: 'NLP Tasks', value: 28, color: '#82ca9d' },
  { name: 'Time Series', value: 20, color: '#ffc658' },
  { name: 'Generative Models', value: 17, color: '#ff7c7c' }
]

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Neural Network Builder</h1>
        <p className="text-muted-foreground">
          Professional-grade AI platform for designing, training, and deploying neural networks
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Models</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Training Jobs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,429</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deployed APIs</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground">
              +23% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Training Progress</CardTitle>
            <CardDescription>
              Real-time training metrics for your latest model
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="epoch" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="loss" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Model Usage Distribution</CardTitle>
            <CardDescription>
              Popular model types across your projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={usageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {usageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Model Performance Comparison</CardTitle>
          <CardDescription>
            Accuracy vs Speed metrics for your deployed models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modelPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#8884d8" />
              <Bar dataKey="speed" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest updates from your neural network projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">CNN-ResNet50 training completed</p>
                <p className="text-xs text-muted-foreground">Achieved 94.2% accuracy on validation set</p>
              </div>
              <Badge variant="secondary">2 min ago</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New dataset uploaded: CIFAR-100</p>
                <p className="text-xs text-muted-foreground">60,000 images ready for preprocessing</p>
              </div>
              <Badge variant="secondary">15 min ago</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">API endpoint deployed</p>
                <p className="text-xs text-muted-foreground">LSTM-Attention model now available at /api/v1/nlp</p>
              </div>
              <Badge variant="secondary">1 hour ago</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Hyperparameter optimization started</p>
                <p className="text-xs text-muted-foreground">Testing 50 configurations for Transformer model</p>
              </div>
              <Badge variant="secondary">2 hours ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ModelDesigner() {
  const [selectedLayer, setSelectedLayer] = useState(null)
  
  const layers = [
    { id: 'dense', name: 'Dense', icon: '⚡', description: 'Fully connected layer' },
    { id: 'conv2d', name: 'Conv2D', icon: '🔲', description: 'Convolutional layer' },
    { id: 'lstm', name: 'LSTM', icon: '🔄', description: 'Long Short-Term Memory' },
    { id: 'dropout', name: 'Dropout', icon: '🎯', description: 'Regularization layer' },
    { id: 'batchnorm', name: 'BatchNorm', icon: '📊', description: 'Batch normalization' },
    { id: 'activation', name: 'Activation', icon: '⚡', description: 'Activation function' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Model Designer</h1>
        <p className="text-muted-foreground">
          Design neural network architectures with visual drag-and-drop interface
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Layer Palette */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Layer Palette</CardTitle>
            <CardDescription>Drag layers to build your model</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className="p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => setSelectedLayer(layer)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{layer.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{layer.name}</p>
                      <p className="text-xs text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Model Canvas */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Model Architecture</CardTitle>
            <CardDescription>Visual representation of your neural network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <Brain className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">Start Building Your Model</p>
                  <p className="text-sm text-muted-foreground">Drag layers from the palette to begin</p>
                </div>
                <Button>Add Input Layer</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Panel */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Layer Properties</CardTitle>
            <CardDescription>Configure selected layer</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedLayer ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Layer Type</label>
                  <p className="text-sm text-muted-foreground">{selectedLayer.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Units</label>
                  <input 
                    type="number" 
                    className="w-full mt-1 px-3 py-2 border rounded-md" 
                    placeholder="128" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Activation</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>ReLU</option>
                    <option>Sigmoid</option>
                    <option>Tanh</option>
                    <option>Softmax</option>
                  </select>
                </div>
                <Button className="w-full">Apply Changes</Button>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Select a layer to configure its properties</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Model Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Model Summary</CardTitle>
          <CardDescription>Overview of your neural network architecture</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Total Layers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Parameters</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0 MB</p>
              <p className="text-sm text-muted-foreground">Model Size</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function DatasetManager() {
  const datasets = [
    { name: 'CIFAR-10', size: '60,000 images', type: 'Image Classification', status: 'Ready' },
    { name: 'IMDB Reviews', size: '50,000 texts', type: 'Sentiment Analysis', status: 'Processing' },
    { name: 'Stock Prices', size: '10 years data', type: 'Time Series', status: 'Ready' },
    { name: 'Medical Images', size: '25,000 scans', type: 'Medical Diagnosis', status: 'Ready' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dataset Management</h1>
        <p className="text-muted-foreground">
          Upload, manage, and preprocess datasets for neural network training
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button>Upload Dataset</Button>
          <Button variant="outline">Import from Cloud</Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Filter</Button>
          <Button variant="outline" size="sm">Sort</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {datasets.map((dataset, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Database className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">{dataset.name}</h3>
                    <p className="text-sm text-muted-foreground">{dataset.size} • {dataset.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={dataset.status === 'Ready' ? 'default' : 'secondary'}>
                    {dataset.status}
                  </Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                  <Button size="sm">Use Dataset</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Preprocessing Tools</CardTitle>
          <CardDescription>Prepare your data for optimal training performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cleaning" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="cleaning">Data Cleaning</TabsTrigger>
              <TabsTrigger value="augmentation">Augmentation</TabsTrigger>
              <TabsTrigger value="normalization">Normalization</TabsTrigger>
              <TabsTrigger value="splitting">Train/Test Split</TabsTrigger>
            </TabsList>
            <TabsContent value="cleaning" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Handle Missing Values</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>Remove rows</option>
                    <option>Fill with mean</option>
                    <option>Fill with median</option>
                    <option>Forward fill</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Outlier Detection</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>Z-score method</option>
                    <option>IQR method</option>
                    <option>Isolation Forest</option>
                    <option>None</option>
                  </select>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="augmentation" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image Augmentation</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">Random rotation</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">Horizontal flip</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">Zoom</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Text Augmentation</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">Synonym replacement</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">Random insertion</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">Random deletion</span>
                    </label>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="normalization" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Scaling Method</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md">
                    <option>StandardScaler</option>
                    <option>MinMaxScaler</option>
                    <option>RobustScaler</option>
                    <option>Normalizer</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Feature Range</label>
                  <div className="flex space-x-2 mt-1">
                    <input type="number" placeholder="0" className="flex-1 px-3 py-2 border rounded-md" />
                    <span className="py-2">to</span>
                    <input type="number" placeholder="1" className="flex-1 px-3 py-2 border rounded-md" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="splitting" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="text-sm font-medium">Training Set (%)</label>
                  <input type="number" value="70" className="w-full mt-1 px-3 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="text-sm font-medium">Validation Set (%)</label>
                  <input type="number" value="15" className="w-full mt-1 px-3 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="text-sm font-medium">Test Set (%)</label>
                  <input type="number" value="15" className="w-full mt-1 px-3 py-2 border rounded-md" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-end mt-6">
            <Button>Apply Preprocessing</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TrainingHub() {
  const [isTraining, setIsTraining] = useState(false)
  const [progress, setProgress] = useState(0)

  const experiments = [
    { name: 'CNN-ResNet50-v1', status: 'Completed', accuracy: '94.2%', duration: '2h 15m' },
    { name: 'LSTM-Attention-v2', status: 'Running', accuracy: '91.8%', duration: '45m' },
    { name: 'Transformer-Base', status: 'Queued', accuracy: '-', duration: '-' },
    { name: 'Custom-MLP-v3', status: 'Failed', accuracy: '-', duration: '1h 30m' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Training & Experimentation</h1>
        <p className="text-muted-foreground">
          Configure, run, and monitor neural network training experiments
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Training Configuration */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Training Configuration</CardTitle>
            <CardDescription>Set up your training parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Model</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md">
                  <option>CNN-ResNet50</option>
                  <option>LSTM-Attention</option>
                  <option>Transformer</option>
                  <option>Custom-MLP</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Dataset</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md">
                  <option>CIFAR-10</option>
                  <option>IMDB Reviews</option>
                  <option>Stock Prices</option>
                  <option>Medical Images</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Optimizer</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md">
                  <option>Adam</option>
                  <option>SGD</option>
                  <option>RMSprop</option>
                  <option>AdaGrad</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Learning Rate</label>
                <input type="number" step="0.0001" value="0.001" className="w-full mt-1 px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">Batch Size</label>
                <input type="number" value="32" className="w-full mt-1 px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">Epochs</label>
                <input type="number" value="100" className="w-full mt-1 px-3 py-2 border rounded-md" />
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={() => setIsTraining(!isTraining)}
                className="flex-1"
              >
                {isTraining ? 'Stop Training' : 'Start Training'}
              </Button>
              <Button variant="outline">Save Configuration</Button>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>Real-time Monitoring</CardTitle>
            <CardDescription>Live training metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span>Training Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="mt-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Current Epoch</span>
                <span className="text-sm font-medium">7/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Loss</span>
                <span className="text-sm font-medium">0.512</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Accuracy</span>
                <span className="text-sm font-medium">89.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Time Remaining</span>
                <span className="text-sm font-medium">1h 23m</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">GPU Utilization</h4>
              <Progress value={85} className="mb-1" />
              <p className="text-xs text-muted-foreground">85% - 12.5GB / 16GB</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experiment History */}
      <Card>
        <CardHeader>
          <CardTitle>Experiment History</CardTitle>
          <CardDescription>Track and compare your training experiments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {experiments.map((exp, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <FlaskConical className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">{exp.name}</h3>
                    <p className="text-sm text-muted-foreground">Duration: {exp.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">Accuracy: {exp.accuracy}</p>
                    <Badge variant={
                      exp.status === 'Completed' ? 'default' : 
                      exp.status === 'Running' ? 'secondary' : 
                      exp.status === 'Queued' ? 'outline' : 'destructive'
                    }>
                      {exp.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hyperparameter Tuning */}
      <Card>
        <CardHeader>
          <CardTitle>Hyperparameter Optimization</CardTitle>
          <CardDescription>Automated search for optimal hyperparameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Search Strategy</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option>Random Search</option>
                <option>Grid Search</option>
                <option>Bayesian Optimization</option>
                <option>Hyperband</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Max Trials</label>
              <input type="number" value="50" className="w-full mt-1 px-3 py-2 border rounded-md" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button>Start Optimization</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ModelEvaluation() {
  const confusionMatrix = [
    [85, 3, 2, 1],
    [2, 88, 4, 2],
    [1, 5, 89, 3],
    [0, 2, 3, 92]
  ]

  const classNames = ['Class A', 'Class B', 'Class C', 'Class D']

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Model Evaluation</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis and visualization of model performance
        </p>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from baseline
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Precision</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.8%</div>
            <p className="text-xs text-muted-foreground">
              +1.8% from baseline
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recall</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.5%</div>
            <p className="text-xs text-muted-foreground">
              +1.2% from baseline
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">F1-Score</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.1%</div>
            <p className="text-xs text-muted-foreground">
              +1.5% from baseline
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Confusion Matrix */}
        <Card>
          <CardHeader>
            <CardTitle>Confusion Matrix</CardTitle>
            <CardDescription>Classification performance breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2 text-sm">
                <div></div>
                {classNames.map((name, i) => (
                  <div key={i} className="text-center font-medium">{name}</div>
                ))}
                {confusionMatrix.map((row, i) => (
                  <>
                    <div key={`label-${i}`} className="font-medium">{classNames[i]}</div>
                    {row.map((value, j) => (
                      <div 
                        key={`cell-${i}-${j}`} 
                        className={`text-center p-2 rounded ${
                          i === j ? 'bg-green-100 text-green-800' : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {value}
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ROC Curve */}
        <Card>
          <CardHeader>
            <CardTitle>ROC Curve</CardTitle>
            <CardDescription>Receiver Operating Characteristic</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { fpr: 0, tpr: 0 },
                { fpr: 0.1, tpr: 0.8 },
                { fpr: 0.2, tpr: 0.9 },
                { fpr: 0.3, tpr: 0.95 },
                { fpr: 1, tpr: 1 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fpr" label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="tpr" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" data={[{fpr: 0, tpr: 0}, {fpr: 1, tpr: 1}]} stroke="#ccc" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-2">AUC: 0.94</p>
          </CardContent>
        </Card>
      </div>

      {/* Learning Curves */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Curves</CardTitle>
          <CardDescription>Training and validation performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trainingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="epoch" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={2} name="Training Accuracy" />
              <Line type="monotone" dataKey="loss" stroke="#82ca9d" strokeWidth={2} name="Training Loss" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Model Interpretability */}
      <Card>
        <CardHeader>
          <CardTitle>Model Interpretability</CardTitle>
          <CardDescription>Understanding model decisions and feature importance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Feature Importance</TabsTrigger>
              <TabsTrigger value="lime">LIME Analysis</TabsTrigger>
              <TabsTrigger value="shap">SHAP Values</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="space-y-4">
              <div className="space-y-3">
                {[
                  { feature: 'Feature 1', importance: 0.35 },
                  { feature: 'Feature 2', importance: 0.28 },
                  { feature: 'Feature 3', importance: 0.22 },
                  { feature: 'Feature 4', importance: 0.15 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="w-20 text-sm">{item.feature}</span>
                    <Progress value={item.importance * 100} className="flex-1" />
                    <span className="text-sm font-medium">{(item.importance * 100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="lime" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                LIME (Local Interpretable Model-agnostic Explanations) analysis for individual predictions.
              </p>
              <Button>Generate LIME Explanation</Button>
            </TabsContent>
            <TabsContent value="shap" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                SHAP (SHapley Additive exPlanations) values for understanding feature contributions.
              </p>
              <Button>Generate SHAP Analysis</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function DeploymentManager() {
  const deployments = [
    { name: 'CNN-ResNet50-API', endpoint: '/api/v1/image-classification', status: 'Active', requests: '1.2M', uptime: '99.9%' },
    { name: 'LSTM-Sentiment-API', endpoint: '/api/v1/sentiment', status: 'Active', requests: '850K', uptime: '99.7%' },
    { name: 'Transformer-NLP-API', endpoint: '/api/v1/nlp', status: 'Deploying', requests: '-', uptime: '-' },
    { name: 'Custom-MLP-API', endpoint: '/api/v1/prediction', status: 'Stopped', requests: '320K', uptime: '98.5%' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Deployment & API Management</h1>
        <p className="text-muted-foreground">
          Deploy models as APIs and monitor their performance in production
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Button>Deploy New Model</Button>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Refresh</Button>
          <Button variant="outline" size="sm">Export Logs</Button>
        </div>
      </div>

      {/* Deployment Status */}
      <div className="grid gap-4">
        {deployments.map((deployment, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Rocket className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">{deployment.name}</h3>
                    <p className="text-sm text-muted-foreground">{deployment.endpoint}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm font-medium">{deployment.requests}</p>
                    <p className="text-xs text-muted-foreground">Requests</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{deployment.uptime}</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                  <Badge variant={
                    deployment.status === 'Active' ? 'default' : 
                    deployment.status === 'Deploying' ? 'secondary' : 'outline'
                  }>
                    {deployment.status}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Monitor</Button>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* API Performance */}
        <Card>
          <CardHeader>
            <CardTitle>API Performance Metrics</CardTitle>
            <CardDescription>Real-time monitoring of deployed models</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-center">
                  <p className="text-2xl font-bold">2.1M</p>
                  <p className="text-sm text-muted-foreground">Total Requests</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">145ms</p>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">99.8%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={[
                  { time: '00:00', requests: 120 },
                  { time: '04:00', requests: 80 },
                  { time: '08:00', requests: 200 },
                  { time: '12:00', requests: 350 },
                  { time: '16:00', requests: 280 },
                  { time: '20:00', requests: 180 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="requests" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Deployment Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Deploy</CardTitle>
            <CardDescription>Deploy a trained model as an API endpoint</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Select Model</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option>CNN-ResNet50-v2</option>
                <option>LSTM-Attention-v3</option>
                <option>Transformer-Large</option>
                <option>Custom-MLP-v4</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">API Endpoint</label>
              <input 
                type="text" 
                placeholder="/api/v1/my-model" 
                className="w-full mt-1 px-3 py-2 border rounded-md" 
              />
            </div>
            <div>
              <label className="text-sm font-medium">Instance Type</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option>CPU - Small (1 vCPU, 2GB RAM)</option>
                <option>CPU - Medium (2 vCPU, 4GB RAM)</option>
                <option>GPU - Small (1 GPU, 8GB VRAM)</option>
                <option>GPU - Large (2 GPU, 16GB VRAM)</option>
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Min Instances</label>
                <input type="number" value="1" className="w-full mt-1 px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium">Max Instances</label>
                <input type="number" value="10" className="w-full mt-1 px-3 py-2 border rounded-md" />
              </div>
            </div>
            <Button className="w-full">Deploy Model</Button>
          </CardContent>
        </Card>
      </div>

      {/* API Documentation */}
      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>Integration guide for your deployed models</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="curl" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`curl -X POST https://api.neuralbuilder.com/v1/image-classification \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image": "base64_encoded_image_data",
    "model_version": "v2.1"
  }'`}
              </pre>
            </TabsContent>
            <TabsContent value="python" className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import requests
import base64

# Encode image
with open('image.jpg', 'rb') as f:
    image_data = base64.b64encode(f.read()).decode()

# Make request
response = requests.post(
    'https://api.neuralbuilder.com/v1/image-classification',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'image': image_data,
        'model_version': 'v2.1'
    }
)

result = response.json()`}
              </pre>
            </TabsContent>
            <TabsContent value="javascript" className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`const response = await fetch('https://api.neuralbuilder.com/v1/image-classification', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image: imageBase64,
    model_version: 'v2.1'
  })
});

const result = await response.json();`}
              </pre>
            </TabsContent>
            <TabsContent value="response" className="space-y-4">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "prediction": {
    "class": "cat",
    "confidence": 0.94,
    "probabilities": {
      "cat": 0.94,
      "dog": 0.05,
      "bird": 0.01
    }
  },
  "model_info": {
    "version": "v2.1",
    "inference_time": "145ms"
  },
  "request_id": "req_abc123"
}`}
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'designer', label: 'Model Designer', icon: Brain },
    { id: 'datasets', label: 'Datasets', icon: Database },
    { id: 'training', label: 'Training', icon: FlaskConical },
    { id: 'evaluation', label: 'Evaluation', icon: BarChart3 },
    { id: 'deployment', label: 'Deployment', icon: Rocket },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle }
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out
        lg:relative lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-semibold text-sidebar-foreground">Neural Builder</h2>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileOpen(false)
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                  ${activeTab === item.id 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-2 text-xs text-sidebar-foreground">
            <Globe className="h-3 w-3" />
            <span>Made with Manus</span>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'designer':
        return <ModelDesigner />
      case 'datasets':
        return <DatasetManager />
      case 'training':
        return <TrainingHub />
      case 'evaluation':
        return <ModelEvaluation />
      case 'deployment':
        return <DeploymentManager />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
        
        <div className="flex-1 lg:ml-0">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b">
            <h1 className="text-lg font-semibold">Neural Builder</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Main content */}
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

